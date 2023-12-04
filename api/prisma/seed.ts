import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.user.create({
    data: {
      email: 'admin@email.com',
      password: 'Abcd1234!',
      firstName: 'Stefano',
      lastName: 'Salvi'
    },
  })
  
  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })