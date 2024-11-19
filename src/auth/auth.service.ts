import {ConflictException, Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    createUser(phone: string) {
        const code = this.generateCode();
        console.log({user_code: code})
        return this.prisma.user.create({
            data: {
                phone,
                verify_token: code,
            },
        })
    }
    findUserByPhone(phone: string) {
        return this.prisma.user.findUnique({
            where: {
                phone
            }
        })
    }
    verify(code: string) {
        const user = this.prisma.user.findFirstOrThrow({
            where: {
                verify_token: code
            }
        });
        if (!user) throw new ConflictException('No user');
        return {status: 'success', message: "You can finish your profile"}
    }
    fillProfile(body, id) {
        const {password, firstName, lastName} = body;
        const data = {...body.password,
            profile: {
            create: {
                firstName: body.firstName,
                lastName: body.lastName,
            }
            }}
        return this.prisma.user.update({
            where: {id},
            data: {
                password,
                profile: {
                    create: {
                        firstName,
                        lastName
                    }
                }
            },
            include: { profile: true }
        })
    }
    generateCode() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Все доступные символы
        const uniqueCharacters = new Set<string>();

        while (uniqueCharacters.size < 4) {
            const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
            uniqueCharacters.add(randomChar);
        }

        const shuffledCharacters = Array.from(uniqueCharacters).sort(() => Math.random() - 0.5);

        return `0x${shuffledCharacters.join('')}`;
    }
}