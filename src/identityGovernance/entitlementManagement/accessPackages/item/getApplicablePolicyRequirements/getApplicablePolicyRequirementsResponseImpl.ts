import {AccessPackageAssignmentRequestRequirementsImpl} from '../../../../../models/';
import {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';
import {createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue} from '../../../../../models/createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue';
import {GetApplicablePolicyRequirementsResponse} from './getApplicablePolicyRequirementsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getApplicablePolicyRequirements method. */
export class GetApplicablePolicyRequirementsResponseImpl implements AdditionalDataHolder, GetApplicablePolicyRequirementsResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: AccessPackageAssignmentRequestRequirements[] | undefined;
    /**
     * Instantiates a new getApplicablePolicyRequirementsResponse and sets the default values.
     * @param getApplicablePolicyRequirementsResponseParameterValue 
     */
    public constructor(getApplicablePolicyRequirementsResponseParameterValue?: GetApplicablePolicyRequirementsResponse | undefined) {
        this.additionalData = getApplicablePolicyRequirementsResponseParameterValue?.additionalData ? getApplicablePolicyRequirementsResponseParameterValue?.additionalData! : {}
        this.value = getApplicablePolicyRequirementsResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageAssignmentRequestRequirementsImpl>(createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: AccessPackageAssignmentRequestRequirementsImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessPackageAssignmentRequestRequirementsImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestRequirementsImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
