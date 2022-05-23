import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {RoleDefinitionImpl} from './index';
import {RoleDefinition} from './roleDefinition';
import {RoleDefinitionCollectionResponse} from './roleDefinitionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleDefinitionCollectionResponseImpl implements AdditionalDataHolder, Parsable, RoleDefinitionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: RoleDefinition[] | undefined;
    /**
     * Instantiates a new RoleDefinitionCollectionResponse and sets the default values.
     * @param roleDefinitionCollectionResponseParameterValue 
     */
    public constructor(roleDefinitionCollectionResponseParameterValue?: RoleDefinitionCollectionResponse | undefined) {
        this.additionalData = roleDefinitionCollectionResponseParameterValue?.additionalData ? roleDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = roleDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = roleDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RoleDefinitionImpl>(createRoleDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: RoleDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RoleDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<RoleDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
