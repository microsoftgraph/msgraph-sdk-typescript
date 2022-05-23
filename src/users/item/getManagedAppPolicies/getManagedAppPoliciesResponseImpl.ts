import {ManagedAppPolicyImpl} from '../../../models/';
import {createManagedAppPolicyFromDiscriminatorValue} from '../../../models/createManagedAppPolicyFromDiscriminatorValue';
import {ManagedAppPolicy} from '../../../models/managedAppPolicy';
import {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getManagedAppPolicies method. */
export class GetManagedAppPoliciesResponseImpl implements AdditionalDataHolder, GetManagedAppPoliciesResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ManagedAppPolicy[] | undefined;
    /**
     * Instantiates a new getManagedAppPoliciesResponse and sets the default values.
     * @param getManagedAppPoliciesResponseParameterValue 
     */
    public constructor(getManagedAppPoliciesResponseParameterValue?: GetManagedAppPoliciesResponse | undefined) {
        this.additionalData = getManagedAppPoliciesResponseParameterValue?.additionalData ? getManagedAppPoliciesResponseParameterValue?.additionalData! : {}
        this.value = getManagedAppPoliciesResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
