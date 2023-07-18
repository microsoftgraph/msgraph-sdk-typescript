import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface ResourceSpecificPermission extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Describes the level of access that the resource-specific permission represents.
     */
    description?: string | undefined;
    /**
     * The display name for the resource-specific permission.
     */
    displayName?: string | undefined;
    /**
     * The unique identifier for the resource-specific application permission.
     */
    id?: Guid | undefined;
    /**
     * Indicates whether the permission is enabled.
     */
    isEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The value of the permission.
     */
    value?: string | undefined;
}
