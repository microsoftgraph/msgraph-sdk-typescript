import {ContainerFilter} from './containerFilter';
import {GroupFilter} from './groupFilter';
import {ObjectMapping} from './objectMapping';
import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The containerFilter property
     */
    containerFilter?: ContainerFilter | undefined;
    /**
     * The editable property
     */
    editable?: boolean | undefined;
    /**
     * The groupFilter property
     */
    groupFilter?: GroupFilter | undefined;
    /**
     * The id property
     */
    id?: string | undefined;
    /**
     * The metadata property
     */
    metadata?: StringKeyStringValuePair[] | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The objectMappings property
     */
    objectMappings?: ObjectMapping[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The priority property
     */
    priority?: number | undefined;
    /**
     * The sourceDirectoryName property
     */
    sourceDirectoryName?: string | undefined;
    /**
     * The targetDirectoryName property
     */
    targetDirectoryName?: string | undefined;
}
