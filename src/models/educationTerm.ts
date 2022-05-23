import {DateOnly} from '@microsoft/kiota-abstractions';

export interface EducationTerm{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Display name of the term. */
    displayName?:string | undefined;
    /** End of the term. */
    endDate?:DateOnly | undefined;
    /** ID of term in the syncing system. */
    externalId?:string | undefined;
    /** Start of the term. */
    startDate?:DateOnly | undefined;
}
