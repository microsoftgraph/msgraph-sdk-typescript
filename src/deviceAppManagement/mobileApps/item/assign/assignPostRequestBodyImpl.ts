import {MobileAppAssignmentImpl} from '../../../../models/';
import {createMobileAppAssignmentFromDiscriminatorValue} from '../../../../models/createMobileAppAssignmentFromDiscriminatorValue';
import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AdditionalDataHolder, AssignPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The mobileAppAssignments property */
    public mobileAppAssignments?: MobileAppAssignment[] | undefined;
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this.additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {}
        this.mobileAppAssignments = assignPostRequestBodyParameterValue?.mobileAppAssignments ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "mobileAppAssignments": n => { this.mobileAppAssignments = n.getCollectionOfObjectValues<MobileAppAssignmentImpl>(createMobileAppAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.mobileAppAssignments && this.mobileAppAssignments.length != 0){        const mobileAppAssignmentsArrValue: MobileAppAssignmentImpl[] = []; this.mobileAppAssignments?.forEach(element => {mobileAppAssignmentsArrValue.push(new MobileAppAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("mobileAppAssignments", mobileAppAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
