import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleDefinitionCollectionResponse} from './unifiedRoleDefinitionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleDefinitionCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleDefinitionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleDefinition[] | undefined;
    /**
     * Instantiates a new UnifiedRoleDefinitionCollectionResponse and sets the default values.
     * @param unifiedRoleDefinitionCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleDefinitionCollectionResponseParameterValue?: UnifiedRoleDefinitionCollectionResponse | undefined) {
        this.additionalData = unifiedRoleDefinitionCollectionResponseParameterValue?.additionalData ? unifiedRoleDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
