import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {Bitlocker, Entity, ThreatAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtection extends Entity implements Parsable {
    /** The bitlocker property */
    private _bitlocker?: Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    private _threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
    /**
     * Gets the bitlocker property value. The bitlocker property
     * @returns a bitlocker
     */
    public get bitlocker() {
        return this._bitlocker;
    };
    /**
     * Sets the bitlocker property value. The bitlocker property
     * @param value Value to set for the bitlocker property.
     */
    public set bitlocker(value: Bitlocker | undefined) {
        this._bitlocker = value;
    };
    /**
     * Instantiates a new InformationProtection and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.informationProtection";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bitlocker": n => { this.bitlocker = n.getObjectValue<Bitlocker>(createBitlockerFromDiscriminatorValue); },
            "threatAssessmentRequests": n => { this.threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Bitlocker>("bitlocker", this.bitlocker);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", this.threatAssessmentRequests);
    };
    /**
     * Gets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @returns a threatAssessmentRequest
     */
    public get threatAssessmentRequests() {
        return this._threatAssessmentRequests;
    };
    /**
     * Sets the threatAssessmentRequests property value. The threatAssessmentRequests property
     * @param value Value to set for the threatAssessmentRequests property.
     */
    public set threatAssessmentRequests(value: ThreatAssessmentRequest[] | undefined) {
        this._threatAssessmentRequests = value;
    };
}
