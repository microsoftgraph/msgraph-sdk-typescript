import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createPersonTypeFromDiscriminatorValue} from './createPersonTypeFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createScoredEmailAddressFromDiscriminatorValue} from './createScoredEmailAddressFromDiscriminatorValue';
import {createWebsiteFromDiscriminatorValue} from './createWebsiteFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Location} from './location';
import {Person} from './person';
import {PersonType} from './personType';
import {Phone} from './phone';
import {ScoredEmailAddress} from './scoredEmailAddress';
import {serializeLocation} from './serializeLocation';
import {serializePersonType} from './serializePersonType';
import {serializePhone} from './serializePhone';
import {serializeScoredEmailAddress} from './serializeScoredEmailAddress';
import {serializeWebsite} from './serializeWebsite';
import {Website} from './website';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPerson(person: Person | undefined = {} as Person) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(person),
        "birthday": n => { person.birthday = n.getStringValue(); },
        "companyName": n => { person.companyName = n.getStringValue(); },
        "department": n => { person.department = n.getStringValue(); },
        "displayName": n => { person.displayName = n.getStringValue(); },
        "givenName": n => { person.givenName = n.getStringValue(); },
        "imAddress": n => { person.imAddress = n.getStringValue(); },
        "isFavorite": n => { person.isFavorite = n.getBooleanValue(); },
        "jobTitle": n => { person.jobTitle = n.getStringValue(); },
        "officeLocation": n => { person.officeLocation = n.getStringValue(); },
        "personNotes": n => { person.personNotes = n.getStringValue(); },
        "personType": n => { person.personType = n.getObjectValue<PersonType>(createPersonTypeFromDiscriminatorValue); },
        "phones": n => { person.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
        "postalAddresses": n => { person.postalAddresses = n.getCollectionOfObjectValues<Location>(createLocationFromDiscriminatorValue); },
        "profession": n => { person.profession = n.getStringValue(); },
        "scoredEmailAddresses": n => { person.scoredEmailAddresses = n.getCollectionOfObjectValues<ScoredEmailAddress>(createScoredEmailAddressFromDiscriminatorValue); },
        "surname": n => { person.surname = n.getStringValue(); },
        "userPrincipalName": n => { person.userPrincipalName = n.getStringValue(); },
        "websites": n => { person.websites = n.getCollectionOfObjectValues<Website>(createWebsiteFromDiscriminatorValue); },
        "yomiCompany": n => { person.yomiCompany = n.getStringValue(); },
    }
}
