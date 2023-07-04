import {Entity} from './entity';
import {Location} from './location';
import {PersonType} from './personType';
import {Phone} from './phone';
import {ScoredEmailAddress} from './scoredEmailAddress';
import {Website} from './website';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Person extends Entity, Parsable {
    /**
     * The person's birthday.
     */
    birthday?: string | undefined;
    /**
     * The name of the person's company.
     */
    companyName?: string | undefined;
    /**
     * The person's department.
     */
    department?: string | undefined;
    /**
     * The person's display name.
     */
    displayName?: string | undefined;
    /**
     * The person's given name.
     */
    givenName?: string | undefined;
    /**
     * The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
     */
    imAddress?: string | undefined;
    /**
     * True if the user has flagged this person as a favorite.
     */
    isFavorite?: boolean | undefined;
    /**
     * The person's job title.
     */
    jobTitle?: string | undefined;
    /**
     * The location of the person's office.
     */
    officeLocation?: string | undefined;
    /**
     * Free-form notes that the user has taken about this person.
     */
    personNotes?: string | undefined;
    /**
     * The type of person.
     */
    personType?: PersonType | undefined;
    /**
     * The person's phone numbers.
     */
    phones?: Phone[] | undefined;
    /**
     * The person's addresses.
     */
    postalAddresses?: Location[] | undefined;
    /**
     * The person's profession.
     */
    profession?: string | undefined;
    /**
     * The person's email addresses.
     */
    scoredEmailAddresses?: ScoredEmailAddress[] | undefined;
    /**
     * The person's surname.
     */
    surname?: string | undefined;
    /**
     * The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
     */
    userPrincipalName?: string | undefined;
    /**
     * The person's websites.
     */
    websites?: Website[] | undefined;
    /**
     * The phonetic Japanese name of the person's company.
     */
    yomiCompany?: string | undefined;
}
