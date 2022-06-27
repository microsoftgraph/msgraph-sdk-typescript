import {IpRangeImpl} from './index';
import {IPv6CidrRange} from './iPv6CidrRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv6CidrRangeImpl extends IpRangeImpl implements IPv6CidrRange {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** IPv6 address in CIDR notation. Not nullable. */
    public cidrAddress?: string | undefined;
    /**
     * Instantiates a new IPv6CidrRange and sets the default values.
     * @param iPv6CidrRangeParameterValue 
     */
    public constructor(iPv6CidrRangeParameterValue?: IPv6CidrRange | undefined) {
        super(iPv6CidrRangeParameterValue);
        this.additionalData = iPv6CidrRangeParameterValue?.additionalData ? iPv6CidrRangeParameterValue?.additionalData! : {};
        this.cidrAddress = iPv6CidrRangeParameterValue?.cidrAddress;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cidrAddress": n => { this.cidrAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.cidrAddress){
            writer.writeStringValue("cidrAddress", this.cidrAddress);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
