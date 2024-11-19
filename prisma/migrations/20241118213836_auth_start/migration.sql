-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "verify_token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
