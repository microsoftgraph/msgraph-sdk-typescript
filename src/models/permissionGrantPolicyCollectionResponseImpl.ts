import {createPermissionGrantPolicyFromDiscriminatorValue} from './createPermissionGrantPolicyFromDiscriminatorValue';
import {PermissionGrantPolicyImpl} from './index';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {PermissionGrantPolicyCollectionResponse} from './permissionGrantPolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantPolicyCollectionResponseImpl implements AdditionalDataHolder, Parsable, PermissionGrantPolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PermissionGrantPolicy[] | undefined;
    /**
     * Instantiates a new PermissionGrantPolicyCollectionResponse and sets the default values.
     * @param permissionGrantPolicyCollectionResponseParameterValue 
     */
    public constructor(permissionGrantPolicyCollectionResponseParameterValue?: PermissionGrantPolicyCollectionResponse | undefined) {
        this.additionalData = permissionGrantPolicyCollectionResponseParameterValue?.additionalData ? permissionGrantPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = permissionGrantPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = permissionGrantPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PermissionGrantPolicyImpl>(createPermissionGrantPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PermissionGrantPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PermissionGrantPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionGrantPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
