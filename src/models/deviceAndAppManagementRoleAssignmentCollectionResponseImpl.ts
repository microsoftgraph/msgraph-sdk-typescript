import {createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue} from './createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import {DeviceAndAppManagementRoleAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceAndAppManagementRoleAssignmentCollectionResponseImpl implements DeviceAndAppManagementRoleAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: DeviceAndAppManagementRoleAssignment[] | undefined;
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
     * Instantiates a new DeviceAndAppManagementRoleAssignmentCollectionResponse and sets the default values.
     * @param deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue 
     */
    public constructor(deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined) {
        this._additionalData = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.additionalData ? deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.nextLink;
        this._value = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceAndAppManagementRoleAssignmentImpl>(createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceAndAppManagementRoleAssignmentImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DeviceAndAppManagementRoleAssignmentImpl? element:new DeviceAndAppManagementRoleAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DeviceAndAppManagementRoleAssignmentInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DeviceAndAppManagementRoleAssignment[] | undefined) {
        if(value) {
            const valueArrValue: DeviceAndAppManagementRoleAssignmentImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DeviceAndAppManagementRoleAssignmentImpl? element:new DeviceAndAppManagementRoleAssignmentImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
