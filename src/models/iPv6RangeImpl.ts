import {IpRangeImpl} from './index';
import {IPv6Range} from './iPv6Range';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv6RangeImpl extends IpRangeImpl implements IPv6Range {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Lower address. */
    public lowerAddress?: string | undefined;
    /** Upper address. */
    public upperAddress?: string | undefined;
    /**
     * Instantiates a new IPv6Range and sets the default values.
     * @param iPv6RangeParameterValue 
     */
    public constructor(iPv6RangeParameterValue?: IPv6Range | undefined) {
        super(iPv6RangeParameterValue);
        this.additionalData = iPv6RangeParameterValue?.additionalData ? iPv6RangeParameterValue?.additionalData! : {};
        this.lowerAddress = iPv6RangeParameterValue?.lowerAddress;
        this.upperAddress = iPv6RangeParameterValue?.upperAddress;
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
