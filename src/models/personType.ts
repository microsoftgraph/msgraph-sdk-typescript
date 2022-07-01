import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonType extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The type of data source, such as Person. */
    class_escaped?: string | undefined;
    /** The secondary type of data source, such as OrganizationUser. */
    subclass?: string | undefined;
}
