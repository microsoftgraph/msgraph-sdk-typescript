import {createManagedAppPolicyFromDiscriminatorValue} from './createManagedAppPolicyFromDiscriminatorValue';
import {ManagedAppPolicyImpl} from './index';
import {ManagedAppPolicy} from './managedAppPolicy';
import {ManagedAppPolicyCollectionResponse} from './managedAppPolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppPolicyCollectionResponseImpl implements AdditionalDataHolder, ManagedAppPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedAppPolicy[] | undefined;
    /**
     * Instantiates a new ManagedAppPolicyCollectionResponse and sets the default values.
     * @param managedAppPolicyCollectionResponseParameterValue 
     */
    public constructor(managedAppPolicyCollectionResponseParameterValue?: ManagedAppPolicyCollectionResponse | undefined) {
        this.additionalData = managedAppPolicyCollectionResponseParameterValue?.additionalData ? managedAppPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedAppPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = managedAppPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppPolicyImpl>(createManagedAppPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedAppPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedAppPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
