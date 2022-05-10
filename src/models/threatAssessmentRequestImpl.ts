import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createThreatAssessmentResultFromDiscriminatorValue} from './createThreatAssessmentResultFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, ThreatAssessmentResultImpl} from './index';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThreatAssessmentRequestImpl extends EntityImpl implements Parsable, ThreatAssessmentRequest {
    /** The threat category. Possible values are: spam, phishing, malware.  */
    category?: ThreatCategory | undefined;
    /** The content type of threat assessment. Possible values are: mail, url, file.  */
    contentType?: ThreatAssessmentContentType | undefined;
    /** The threat assessment request creator.  */
    createdBy?: IdentitySet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    createdDateTime?: Date | undefined;
    /** The expected assessment from submitter. Possible values are: block, unblock.  */
    expectedAssessment?: ThreatExpectedAssessment | undefined;
    /** The source of the threat assessment request. Possible values are: user, administrator.  */
    requestSource?: ThreatAssessmentRequestSource | undefined;
    /** A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.  */
    results?: ThreatAssessmentResult[] | undefined;
    /** The assessment process status. Possible values are: pending, completed.  */
    status?: ThreatAssessmentStatus | undefined;
    /**
     * Instantiates a new threatAssessmentRequest and sets the default values.
     * @param threatAssessmentRequestParameterValue 
     */
    public constructor(threatAssessmentRequestParameterValue?: ThreatAssessmentRequest | undefined) {
        super();
        this.category = threatAssessmentRequestParameterValue?.category ;
        this.contentType = threatAssessmentRequestParameterValue?.contentType ;
        this.createdBy = threatAssessmentRequestParameterValue?.createdBy ;
        this.createdDateTime = threatAssessmentRequestParameterValue?.createdDateTime ;
        this.expectedAssessment = threatAssessmentRequestParameterValue?.expectedAssessment ;
        this.requestSource = threatAssessmentRequestParameterValue?.requestSource ;
        this.results = threatAssessmentRequestParameterValue?.results ;
        this.status = threatAssessmentRequestParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "category": n => { this.category = n.getEnumValue<ThreatCategory>(ThreatCategory); },
            "contentType": n => { this.contentType = n.getEnumValue<ThreatAssessmentContentType>(ThreatAssessmentContentType); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "expectedAssessment": n => { this.expectedAssessment = n.getEnumValue<ThreatExpectedAssessment>(ThreatExpectedAssessment); },
            "requestSource": n => { this.requestSource = n.getEnumValue<ThreatAssessmentRequestSource>(ThreatAssessmentRequestSource); },
            "results": n => { this.results = n.getCollectionOfObjectValues<ThreatAssessmentResultImpl>(createThreatAssessmentResultFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ThreatAssessmentStatus>(ThreatAssessmentStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.category){
        if(this.category)
        writer.writeEnumValue<ThreatCategory>("category", this.category);
        }
        if(this.contentType){
        if(this.contentType)
        writer.writeEnumValue<ThreatAssessmentContentType>("contentType", this.contentType);
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.expectedAssessment){
        if(this.expectedAssessment)
        writer.writeEnumValue<ThreatExpectedAssessment>("expectedAssessment", this.expectedAssessment);
        }
        if(this.requestSource){
        if(this.requestSource)
        writer.writeEnumValue<ThreatAssessmentRequestSource>("requestSource", this.requestSource);
        }
        if(this.results){
        const resultsArrValue: ThreatAssessmentResultImpl[] = []; this.results?.forEach(element => {resultsArrValue.push(new ThreatAssessmentResultImpl(element));});
        writer.writeCollectionOfObjectValues<ThreatAssessmentResultImpl>("results", resultsArrValue);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<ThreatAssessmentStatus>("status", this.status);
        }
    };
}
