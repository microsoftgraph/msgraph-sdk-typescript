import {ResourceSpecificPermissionGrantImpl} from '../../../models/';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from '../../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {ResourceSpecificPermissionGrant} from '../../../models/resourceSpecificPermissionGrant';
import {CheckGrantedPermissionsForAppResponse} from './checkGrantedPermissionsForAppResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkGrantedPermissionsForApp method. */
export class CheckGrantedPermissionsForAppResponseImpl implements AdditionalDataHolder, CheckGrantedPermissionsForAppResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * Instantiates a new checkGrantedPermissionsForAppResponse and sets the default values.
     * @param checkGrantedPermissionsForAppResponseParameterValue 
     */
    public constructor(checkGrantedPermissionsForAppResponseParameterValue?: CheckGrantedPermissionsForAppResponse | undefined) {
        this.additionalData = checkGrantedPermissionsForAppResponseParameterValue?.additionalData ? checkGrantedPermissionsForAppResponseParameterValue?.additionalData! : {}
        this.value = checkGrantedPermissionsForAppResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ResourceSpecificPermissionGrantImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ResourceSpecificPermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
