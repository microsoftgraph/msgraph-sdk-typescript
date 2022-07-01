import {DeviceConfigurationAssignmentImpl} from '../../../../models/';
import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {AssignResponse} from './assignResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignResponseImpl implements AssignResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: DeviceConfigurationAssignment[] | undefined;
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
     * Instantiates a new assignResponse and sets the default values.
     * @param assignResponseParameterValue 
     */
    public constructor(assignResponseParameterValue?: AssignResponse | undefined) {
        this._additionalData = assignResponseParameterValue?.additionalData ? assignResponseParameterValue?.additionalData! : {};
        this._value = assignResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationAssignmentImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DeviceConfigurationAssignmentImpl? element:new DeviceConfigurationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DeviceConfigurationAssignmentInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DeviceConfigurationAssignment[] | undefined) {
        if(value) {
            const valueArrValue: DeviceConfigurationAssignmentImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DeviceConfigurationAssignmentImpl? element:new DeviceConfigurationAssignmentImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
