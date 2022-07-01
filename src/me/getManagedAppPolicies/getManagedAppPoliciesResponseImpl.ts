import {ManagedAppPolicyImpl} from '../../models/';
import {createManagedAppPolicyFromDiscriminatorValue} from '../../models/createManagedAppPolicyFromDiscriminatorValue';
import {ManagedAppPolicy} from '../../models/managedAppPolicy';
import {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getManagedAppPolicies method. */
export class GetManagedAppPoliciesResponseImpl implements GetManagedAppPoliciesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ManagedAppPolicy[] | undefined;
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
     * Instantiates a new getManagedAppPoliciesResponse and sets the default values.
     * @param getManagedAppPoliciesResponseParameterValue 
     */
    public constructor(getManagedAppPoliciesResponseParameterValue?: GetManagedAppPoliciesResponse | undefined) {
        this._additionalData = getManagedAppPoliciesResponseParameterValue?.additionalData ? getManagedAppPoliciesResponseParameterValue?.additionalData! : {};
        this._value = getManagedAppPoliciesResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppPolicyImpl>(createManagedAppPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppPolicyImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ManagedAppPolicyImpl? element:new ManagedAppPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ManagedAppPolicyInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedAppPolicy[] | undefined) {
        if(value) {
            const valueArrValue: ManagedAppPolicyImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ManagedAppPolicyImpl? element:new ManagedAppPolicyImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
