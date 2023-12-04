-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
