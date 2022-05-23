import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {SubjectRightsRequestImpl} from './index';
import {Privacy} from './privacy';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrivacyImpl implements AdditionalDataHolder, Parsable, Privacy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The subjectRightsRequests property */
    public subjectRightsRequests?: SubjectRightsRequest[] | undefined;
    /**
     * Instantiates a new Privacy and sets the default values.
     * @param privacyParameterValue 
     */
    public constructor(privacyParameterValue?: Privacy | undefined) {
        this.additionalData = privacyParameterValue?.additionalData ? privacyParameterValue?.additionalData! : {}
        this.subjectRightsRequests = privacyParameterValue?.subjectRightsRequests ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "subjectRightsRequests": n => { this.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequestImpl>(createSubjectRightsRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.subjectRightsRequests && this.subjectRightsRequests.length != 0){        const subjectRightsRequestsArrValue: SubjectRightsRequestImpl[] = []; this.subjectRightsRequests?.forEach(element => {subjectRightsRequestsArrValue.push(new SubjectRightsRequestImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectRightsRequestImpl>("subjectRightsRequests", subjectRightsRequestsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
