-- CreateTable
CREATE TABLE "userInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "StateRegistration" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "numberHouse" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "numberPhone" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "measures" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userInfo_email_key" ON "userInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userInfo_socialReason_key" ON "userInfo"("socialReason");

-- CreateIndex
CREATE UNIQUE INDEX "userInfo_StateRegistration_key" ON "userInfo"("StateRegistration");
