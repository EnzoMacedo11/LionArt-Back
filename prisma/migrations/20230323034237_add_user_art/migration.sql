-- CreateTable
CREATE TABLE "UserArts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "artId" INTEGER,

    CONSTRAINT "UserArts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArts" ADD CONSTRAINT "UserArts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArts" ADD CONSTRAINT "UserArts_artId_fkey" FOREIGN KEY ("artId") REFERENCES "Art"("id") ON DELETE SET NULL ON UPDATE CASCADE;
