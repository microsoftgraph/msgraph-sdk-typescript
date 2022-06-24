import {ThreatAssessmentRequestImpl} from './index';
import {UrlAssessmentRequest} from './urlAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UrlAssessmentRequestImpl extends ThreatAssessmentRequestImpl implements UrlAssessmentRequest {
    /** The URL string. */
    public url?: string | undefined;
    /**
     * Instantiates a new UrlAssessmentRequest and sets the default values.
     * @param urlAssessmentRequestParameterValue 
     */
    public constructor(urlAssessmentRequestParameterValue?: UrlAssessmentRequest | undefined) {
        super(urlAssessmentRequestParameterValue);
        this.url = urlAssessmentRequestParameterValue?.url;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.url){
            writer.writeStringValue("url", this.url);
        }
    };
}
