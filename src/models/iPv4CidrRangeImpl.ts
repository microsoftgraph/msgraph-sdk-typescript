import {IpRangeImpl} from './index';
import {IPv4CidrRange} from './iPv4CidrRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv4CidrRangeImpl extends IpRangeImpl implements IPv4CidrRange {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** IPv4 address in CIDR notation. Not nullable. */
    public cidrAddress?: string | undefined;
    /**
     * Instantiates a new IPv4CidrRange and sets the default values.
     * @param iPv4CidrRangeParameterValue 
     */
    public constructor(iPv4CidrRangeParameterValue?: IPv4CidrRange | undefined) {
        super(iPv4CidrRangeParameterValue);
        this.additionalData = iPv4CidrRangeParameterValue?.additionalData ? iPv4CidrRangeParameterValue?.additionalData! : {};
        this.cidrAddress = iPv4CidrRangeParameterValue?.cidrAddress;
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
