import {Bitlocker} from './bitlocker';
import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {BitlockerImpl, EntityImpl, ThreatAssessmentRequestImpl} from './index';
import {InformationProtection} from './informationProtection';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class InformationProtectionImpl extends EntityImpl implements InformationProtection {
    /** The bitlocker property */
    private _bitlocker?: Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    private _threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
    /**
     * Gets the bitlocker property value. The bitlocker property
     * @returns a BitlockerInterface
     */
    public get bitlocker() {
        return this._bitlocker;
    };
    /**
     * Sets the bitlocker property value. The bitlocker property
     * @param value Value to set for the bitlocker property.
     */
    public set bitlocker(value: Bitlocker | undefined) {
        if(value) {
            this._bitlocker = value instanceof BitlockerImpl? value as BitlockerImpl: new BitlockerImpl(value);
        }
    };
    /**
     * Instantiates a new informationProtection and sets the default values.
     * @param informationProtectionParameterValue 
     */
    public constructor(informationProtectionParameterValue?: InformationProtection | undefined) {
        super(informationProtectionParameterValue);
        this._bitlocker = informationProtectionParameterValue?.bitlocker;
        this._threatAssessmentRequests = informationProtectionParameterValue?.threatAssessmentRequests;
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
            writer.writeObjectValue<BitlockerImpl>("bitlocker", (this.bitlocker instanceof BitlockerImpl? this.bitlocker as BitlockerImpl: new BitlockerImpl(this.bitlocker)));
        }
        if(this.threatAssessmentRequests && this.threatAssessmentRequests.length != 0){        const threatAssessmentRequestsArrValue: ThreatAssessmentRequestImpl[] = [];
        this.threatAssessmentRequests?.forEach(element => {
            threatAssessmentRequestsArrValue.push((element instanceof ThreatAssessmentRequestImpl? element as ThreatAssessmentRequestImpl:new ThreatAssessmentRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ThreatAssessmentRequestImpl>("threatAssessmentRequests", threatAssessmentRequestsArrValue);
        }
    };
    /**
     * Gets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @returns a ThreatAssessmentRequestInterface
     */
    public get threatAssessmentRequests() {
        return this._threatAssessmentRequests;
    };
    /**
     * Sets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @param value Value to set for the threatAssessmentRequests property.
     */
    public set threatAssessmentRequests(value: ThreatAssessmentRequest[] | undefined) {
        if(value) {
            const threatAssessmentRequestsArrValue: ThreatAssessmentRequestImpl[] = [];
            this.threatAssessmentRequests?.forEach(element => {
                threatAssessmentRequestsArrValue.push((element instanceof ThreatAssessmentRequestImpl? element as ThreatAssessmentRequestImpl:new ThreatAssessmentRequestImpl(element)));
            });
            this._threatAssessmentRequests = threatAssessmentRequestsArrValue;
        }
    };
}
