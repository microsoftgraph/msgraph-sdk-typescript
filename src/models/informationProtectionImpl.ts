import {Bitlocker} from './bitlocker';
import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {BitlockerImpl, EntityImpl, ThreatAssessmentRequestImpl} from './index';
import {InformationProtection} from './informationProtection';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class InformationProtectionImpl extends EntityImpl implements InformationProtection, Parsable {
    /** The bitlocker property */
    public bitlocker?: Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    public threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
    /**
     * Instantiates a new informationProtection and sets the default values.
     * @param informationProtectionParameterValue 
     */
    public constructor(informationProtectionParameterValue?: InformationProtection | undefined) {
        super();
        this.bitlocker = informationProtectionParameterValue?.bitlocker ;
        this.threatAssessmentRequests = informationProtectionParameterValue?.threatAssessmentRequests ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bitlocker": n => { this.bitlocker = n.getObjectValue<BitlockerImpl>(createBitlockerFromDiscriminatorValue); },
            "threatAssessmentRequests": n => { this.threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequestImpl>(createThreatAssessmentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bitlocker){
        writer.writeObjectValue<BitlockerImpl>("bitlocker", new BitlockerImpl(this.bitlocker));
        }
        if(this.threatAssessmentRequests && this.threatAssessmentRequests.length != 0){        const threatAssessmentRequestsArrValue: ThreatAssessmentRequestImpl[] = []; this.threatAssessmentRequests?.forEach(element => {threatAssessmentRequestsArrValue.push(new ThreatAssessmentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequestImpl>("threatAssessmentRequests", threatAssessmentRequestsArrValue);
        }
    };
}
