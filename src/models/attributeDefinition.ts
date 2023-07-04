import {AttributeDefinitionMetadataEntry} from './attributeDefinitionMetadataEntry';
import {AttributeType} from './attributeType';
import {Mutability} from './mutability';
import {ReferencedObject} from './referencedObject';
import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeDefinition extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The anchor property
     */
    anchor?: boolean | undefined;
    /**
     * The apiExpressions property
     */
    apiExpressions?: StringKeyStringValuePair[] | undefined;
    /**
     * The caseExact property
     */
    caseExact?: boolean | undefined;
    /**
     * The defaultValue property
     */
    defaultValue?: string | undefined;
    /**
     * The flowNullValues property
     */
    flowNullValues?: boolean | undefined;
    /**
     * The metadata property
     */
    metadata?: AttributeDefinitionMetadataEntry[] | undefined;
    /**
     * The multivalued property
     */
    multivalued?: boolean | undefined;
    /**
     * The mutability property
     */
    mutability?: Mutability | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The referencedObjects property
     */
    referencedObjects?: ReferencedObject[] | undefined;
    /**
     * The required property
     */
    required?: boolean | undefined;
    /**
     * The type property
     */
    type?: AttributeType | undefined;
}
