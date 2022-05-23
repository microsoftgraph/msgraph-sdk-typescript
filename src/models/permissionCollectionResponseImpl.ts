import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {PermissionImpl} from './index';
import {Permission} from './permission';
import {PermissionCollectionResponse} from './permissionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionCollectionResponseImpl implements AdditionalDataHolder, Parsable, PermissionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Permission[] | undefined;
    /**
     * Instantiates a new PermissionCollectionResponse and sets the default values.
     * @param permissionCollectionResponseParameterValue 
     */
    public constructor(permissionCollectionResponseParameterValue?: PermissionCollectionResponse | undefined) {
        this.additionalData = permissionCollectionResponseParameterValue?.additionalData ? permissionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = permissionCollectionResponseParameterValue?.nextLink ;
        this.value = permissionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PermissionImpl>(createPermissionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PermissionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PermissionImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
