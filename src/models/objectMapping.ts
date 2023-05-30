import {AttributeMapping} from './attributeMapping';
import {Filter} from './filter';
import {ObjectFlowTypes} from './objectFlowTypes';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectMapping extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attributeMappings property */
    attributeMappings?: AttributeMapping[] | undefined;
    /** The enabled property */
    enabled?: boolean | undefined;
    /** The flowTypes property */
    flowTypes?: ObjectFlowTypes | undefined;
    /** The metadata property */
    metadata?: ObjectMappingMetadataEntry[] | undefined;
    /** The name property */
    name?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The scope property */
    scope?: Filter | undefined;
    /** The sourceObjectName property */
    sourceObjectName?: string | undefined;
    /** The targetObjectName property */
    targetObjectName?: string | undefined;
}
