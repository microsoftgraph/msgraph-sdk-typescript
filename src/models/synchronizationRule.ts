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
     * true if the synchronization rule can be customized; false if this rule is read-only and should not be changed.
     */
    editable?: boolean | undefined;
    /**
     * The groupFilter property
     */
    groupFilter?: GroupFilter | undefined;
    /**
     * Synchronization rule identifier. Must be one of the identifiers recognized by the synchronization engine. Supported rule identifiers can be found in the synchronization template returned by the API.
     */
    id?: string | undefined;
    /**
     * Additional extension properties. Unless instructed explicitly by the support team, metadata values should not be changed.
     */
    metadata?: StringKeyStringValuePair[] | undefined;
    /**
     * Human-readable name of the synchronization rule. Not nullable.
     */
    name?: string | undefined;
    /**
     * Collection of object mappings supported by the rule. Tells the synchronization engine which objects should be synchronized.
     */
    objectMappings?: ObjectMapping[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Priority relative to other rules in the synchronizationSchema. Rules with the lowest priority number will be processed first.
     */
    priority?: number | undefined;
    /**
     * Name of the source directory. Must match one of the directory definitions in synchronizationSchema.
     */
    sourceDirectoryName?: string | undefined;
    /**
     * Name of the target directory. Must match one of the directory definitions in synchronizationSchema.
     */
    targetDirectoryName?: string | undefined;
}
