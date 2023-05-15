import {Location} from './location';
import {Person} from './person';
import {PersonType} from './personType';
import {Phone} from './phone';
import {ScoredEmailAddress} from './scoredEmailAddress';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {serializePersonType} from './serializePersonType';
import {serializePhone} from './serializePhone';
import {serializeScoredEmailAddress} from './serializeScoredEmailAddress';
import {serializeWebsite} from './serializeWebsite';
import {Website} from './website';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePerson(writer: SerializationWriter, person: Person | undefined = {} as Person) : void {
        serializeEntity(writer, person)
        writer.writeStringValue("birthday", person.birthday);
        writer.writeStringValue("companyName", person.companyName);
        writer.writeStringValue("department", person.department);
        writer.writeStringValue("displayName", person.displayName);
        writer.writeStringValue("givenName", person.givenName);
        writer.writeStringValue("imAddress", person.imAddress);
        writer.writeBooleanValue("isFavorite", person.isFavorite);
        writer.writeStringValue("jobTitle", person.jobTitle);
        writer.writeStringValue("officeLocation", person.officeLocation);
        writer.writeStringValue("personNotes", person.personNotes);
        writer.writeObjectValue<PersonType>("personType", person.personType, serializePersonType);
        writer.writeCollectionOfObjectValues<Phone>("phones", person.phones, serializePhone);
        writer.writeCollectionOfObjectValues<Location>("postalAddresses", person.postalAddresses, serializeLocation);
        writer.writeStringValue("profession", person.profession);
        writer.writeCollectionOfObjectValues<ScoredEmailAddress>("scoredEmailAddresses", person.scoredEmailAddresses, serializeScoredEmailAddress);
        writer.writeStringValue("surname", person.surname);
        writer.writeStringValue("userPrincipalName", person.userPrincipalName);
        writer.writeCollectionOfObjectValues<Website>("websites", person.websites, serializeWebsite);
        writer.writeStringValue("yomiCompany", person.yomiCompany);
}
