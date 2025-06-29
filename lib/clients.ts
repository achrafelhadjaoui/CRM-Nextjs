// lib/clients.ts
import { faker } from '@faker-js/faker';
import { Client } from '@/types/clients';

let addedClients: Client[] = []; // Clients added via POST

function createRandomClients(count: number = 20): Client[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    nom: faker.person.fullName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    date: faker.date.past().toISOString()
  }));
}

const fakeClients = createRandomClients(20);

export function getAllClients(): Client[] {
  return [...addedClients, ...fakeClients];
}

export function addClient(client: Client) {
  addedClients.unshift(client); // newest first
}
