import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {TargetedManagedAppPolicyAssignmentImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppPolicyAssignmentCollectionResponse} from './targetedManagedAppPolicyAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppPolicyAssignmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, TargetedManagedAppPolicyAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TargetedManagedAppPolicyAssignment[] | undefined;
    /**
     * Instantiates a new TargetedManagedAppPolicyAssignmentCollectionResponse and sets the default values.
     * @param targetedManagedAppPolicyAssignmentCollectionResponseParameterValue 
     */
    public constructor(targetedManagedAppPolicyAssignmentCollectionResponseParameterValue?: TargetedManagedAppPolicyAssignmentCollectionResponse | undefined) {
        this.additionalData = targetedManagedAppPolicyAssignmentCollectionResponseParameterValue?.additionalData ? targetedManagedAppPolicyAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = targetedManagedAppPolicyAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = targetedManagedAppPolicyAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TargetedManagedAppPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
