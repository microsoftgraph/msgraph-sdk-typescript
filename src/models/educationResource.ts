import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationResource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The individual who created the resource.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Moment in time when the resource was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: Date | undefined;
    /**
     * Display name of resource.
     */
    displayName?: string | undefined;
    /**
     * The last user to modify the resource.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
