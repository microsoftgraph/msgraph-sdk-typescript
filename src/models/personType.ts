import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonType extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The type of data source, such as Person.
     */
    classEscaped?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The secondary type of data source, such as OrganizationUser.
     */
    subclass?: string | undefined;
}
