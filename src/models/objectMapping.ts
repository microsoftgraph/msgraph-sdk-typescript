import {AttributeMapping} from './attributeMapping';
import {Filter} from './filter';
import {ObjectFlowTypes} from './objectFlowTypes';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectMapping extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Attribute mappings define which attributes to map from the source object into the target object and how they should flow. A number of functions are available to support the transformation of the original source values.
     */
    attributeMappings?: AttributeMapping[] | undefined;
    /**
     * When true, this object mapping will be processed during synchronization. When false, this object mapping will be skipped.
     */
    enabled?: boolean | undefined;
    /**
     * The flowTypes property
     */
    flowTypes?: ObjectFlowTypes | undefined;
    /**
     * Additional extension properties. Unless mentioned explicitly, metadata values should not be changed.
     */
    metadata?: ObjectMappingMetadataEntry[] | undefined;
    /**
     * Human-friendly name of the object mapping.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines a filter to be used when deciding whether a given object should be provisioned. For example, you might want to only provision users that are located in the US.
     */
    scope?: Filter | undefined;
    /**
     * Name of the object in the source directory. Must match the object name from the source directory definition.
     */
    sourceObjectName?: string | undefined;
    /**
     * Name of the object in target directory. Must match the object name from the target directory definition.
     */
    targetObjectName?: string | undefined;
}
