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
     * true if the attribute should be used as the anchor for the object. Anchor attributes must have a unique value identifying an object, and must be immutable. Default is false. One, and only one, of the object's attributes must be designated as the anchor to support synchronization.
     */
    anchor?: boolean | undefined;
    /**
     * The apiExpressions property
     */
    apiExpressions?: StringKeyStringValuePair[] | undefined;
    /**
     * true if value of this attribute should be treated as case-sensitive. This setting affects how the synchronization engine detects changes for the attribute.
     */
    caseExact?: boolean | undefined;
    /**
     * The defaultValue property
     */
    defaultValue?: string | undefined;
    /**
     * 'true' to allow null values for attributes.
     */
    flowNullValues?: boolean | undefined;
    /**
     * Metadata for the given object.
     */
    metadata?: AttributeDefinitionMetadataEntry[] | undefined;
    /**
     * true if an attribute can have multiple values. Default is false.
     */
    multivalued?: boolean | undefined;
    /**
     * The mutability property
     */
    mutability?: Mutability | undefined;
    /**
     * Name of the attribute. Must be unique within the object definition. Not nullable.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * For attributes with reference type, lists referenced objects (for example, the manager attribute would list User as the referenced object).
     */
    referencedObjects?: ReferencedObject[] | undefined;
    /**
     * true if attribute is required. Object can not be created if any of the required attributes are missing. If during synchronization, the required attribute has no value, the default value will be used. If default the value was not set, synchronization will record an error.
     */
    required?: boolean | undefined;
    /**
     * The type property
     */
    type?: AttributeType | undefined;
}
