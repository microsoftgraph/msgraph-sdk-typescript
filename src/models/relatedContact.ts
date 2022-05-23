import {ContactRelationship} from './contactRelationship';

export interface RelatedContact{
    /** Indicates whether the user has been consented to access student data. */
    accessConsent?:boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of the contact. Required. */
    displayName?:string | undefined;
    /** Email address of the contact. */
    emailAddress?:string | undefined;
    /** Mobile phone number of the contact. */
    mobilePhone?:string | undefined;
    /** Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue. */
    relationship?:ContactRelationship | undefined;
}
