import {ClientPlatform} from './clientPlatform';
import {ClientUserAgent} from './clientUserAgent';
import {UserAgentImpl} from './index';
import {ProductFamily} from './productFamily';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientUserAgentImpl extends UserAgentImpl implements ClientUserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web, ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue. */
    public platform?: ClientPlatform | undefined;
    /** Identifies the family of application software used by this endpoint. Possible values are: unknown, teams, skypeForBusiness, lync, unknownFutureValue, azureCommunicationServices.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: azureCommunicationServices. */
    public productFamily?: ProductFamily | undefined;
    /**
     * Instantiates a new ClientUserAgent and sets the default values.
     * @param clientUserAgentParameterValue 
     */
    public constructor(clientUserAgentParameterValue?: ClientUserAgent | undefined) {
        super(clientUserAgentParameterValue);
        this.additionalData = clientUserAgentParameterValue?.additionalData ? clientUserAgentParameterValue?.additionalData! : {};
        this.platform = clientUserAgentParameterValue?.platform;
        this.productFamily = clientUserAgentParameterValue?.productFamily;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "platform": n => { this.platform = n.getEnumValue<ClientPlatform>(ClientPlatform); },
            "productFamily": n => { this.productFamily = n.getEnumValue<ProductFamily>(ProductFamily); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.platform){
            writer.writeEnumValue<ClientPlatform>("platform", this.platform);
        }
        if(this.productFamily){
            writer.writeEnumValue<ProductFamily>("productFamily", this.productFamily);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
