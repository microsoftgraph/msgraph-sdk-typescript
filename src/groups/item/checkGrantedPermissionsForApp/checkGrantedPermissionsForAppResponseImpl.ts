import {ResourceSpecificPermissionGrantImpl} from '../../../models/';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from '../../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {ResourceSpecificPermissionGrant} from '../../../models/resourceSpecificPermissionGrant';
import {CheckGrantedPermissionsForAppResponse} from './checkGrantedPermissionsForAppResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkGrantedPermissionsForApp method. */
export class CheckGrantedPermissionsForAppResponseImpl implements CheckGrantedPermissionsForAppResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new checkGrantedPermissionsForAppResponse and sets the default values.
     * @param checkGrantedPermissionsForAppResponseParameterValue 
     */
    public constructor(checkGrantedPermissionsForAppResponseParameterValue?: CheckGrantedPermissionsForAppResponse | undefined) {
        this._additionalData = checkGrantedPermissionsForAppResponseParameterValue?.additionalData ? checkGrantedPermissionsForAppResponseParameterValue?.additionalData! : {};
        this._value = checkGrantedPermissionsForAppResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ResourceSpecificPermissionGrantImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element as ResourceSpecificPermissionGrantImpl:new ResourceSpecificPermissionGrantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ResourceSpecificPermissionGrantInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ResourceSpecificPermissionGrant[] | undefined) {
        if(value) {
            const valueArrValue: ResourceSpecificPermissionGrantImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ResourceSpecificPermissionGrantImpl? element as ResourceSpecificPermissionGrantImpl:new ResourceSpecificPermissionGrantImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
