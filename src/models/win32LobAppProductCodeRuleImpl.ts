import {Win32LobAppRuleImpl} from './index';
import {Win32LobAppProductCodeRule} from './win32LobAppProductCodeRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppProductCodeRuleImpl extends Win32LobAppRuleImpl implements Win32LobAppProductCodeRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The product code of the app. */
    public productCode?: string | undefined;
    /** The product version comparison value. */
    public productVersion?: string | undefined;
    /** The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    public productVersionOperator?: Win32LobAppRuleOperator | undefined;
    /**
     * Instantiates a new Win32LobAppProductCodeRule and sets the default values.
     * @param win32LobAppProductCodeRuleParameterValue 
     */
    public constructor(win32LobAppProductCodeRuleParameterValue?: Win32LobAppProductCodeRule | undefined) {
        super(win32LobAppProductCodeRuleParameterValue);
        this.additionalData = win32LobAppProductCodeRuleParameterValue?.additionalData ? win32LobAppProductCodeRuleParameterValue?.additionalData! : {};
        this.productCode = win32LobAppProductCodeRuleParameterValue?.productCode;
        this.productVersion = win32LobAppProductCodeRuleParameterValue?.productVersion;
        this.productVersionOperator = win32LobAppProductCodeRuleParameterValue?.productVersionOperator;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "productCode": n => { this.productCode = n.getStringValue(); },
            "productVersion": n => { this.productVersion = n.getStringValue(); },
            "productVersionOperator": n => { this.productVersionOperator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.productCode){
            writer.writeStringValue("productCode", this.productCode);
        }
        if(this.productVersion){
            writer.writeStringValue("productVersion", this.productVersion);
        }
        if(this.productVersionOperator){
            writer.writeEnumValue<Win32LobAppRuleOperator>("productVersionOperator", this.productVersionOperator);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
