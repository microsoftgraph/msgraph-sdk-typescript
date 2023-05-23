import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {AttributeMappingSource} from './attributeMappingSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMapping extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The defaultValue property */
    defaultValue?: string | undefined;
    /** The exportMissingReferences property */
    exportMissingReferences?: boolean | undefined;
    /** The flowBehavior property */
    flowBehavior?: AttributeFlowBehavior | undefined;
    /** The flowType property */
    flowType?: AttributeFlowType | undefined;
    /** The matchingPriority property */
    matchingPriority?: number | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The source property */
    source?: AttributeMappingSource | undefined;
    /** The targetAttributeName property */
    targetAttributeName?: string | undefined;
}
