import {IpRangeImpl} from './index';
import {IPv4Range} from './iPv4Range';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv4RangeImpl extends IpRangeImpl implements IPv4Range {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Lower address. */
    public lowerAddress?: string | undefined;
    /** Upper address. */
    public upperAddress?: string | undefined;
    /**
     * Instantiates a new IPv4Range and sets the default values.
     * @param iPv4RangeParameterValue 
     */
    public constructor(iPv4RangeParameterValue?: IPv4Range | undefined) {
        super(iPv4RangeParameterValue);
        this.additionalData = iPv4RangeParameterValue?.additionalData ? iPv4RangeParameterValue?.additionalData! : {};
        this.lowerAddress = iPv4RangeParameterValue?.lowerAddress;
        this.upperAddress = iPv4RangeParameterValue?.upperAddress;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lowerAddress": n => { this.lowerAddress = n.getStringValue(); },
            "upperAddress": n => { this.upperAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lowerAddress){
            writer.writeStringValue("lowerAddress", this.lowerAddress);
        }
        if(this.upperAddress){
            writer.writeStringValue("upperAddress", this.upperAddress);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
