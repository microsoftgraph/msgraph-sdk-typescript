import {DeviceCompliancePolicyAssignmentImpl} from '../../../../models/';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {AssignResponse} from './assignResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignResponseImpl implements AssignResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: DeviceCompliancePolicyAssignment[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
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
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element:new DeviceCompliancePolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DeviceCompliancePolicyAssignmentInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DeviceCompliancePolicyAssignment[] | undefined) {
        if(value) {
            const valueArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element:new DeviceCompliancePolicyAssignmentImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
