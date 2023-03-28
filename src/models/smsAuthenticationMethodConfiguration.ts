import {createSmsAuthenticationMethodTargetFromDiscriminatorValue} from './createSmsAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, SmsAuthenticationMethodTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SmsAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** A collection of groups that are enabled to use the authentication method. */
    private _includeTargets?: SmsAuthenticationMethodTarget[] | undefined;
    /**
     * Instantiates a new SmsAuthenticationMethodConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.smsAuthenticationMethodConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<SmsAuthenticationMethodTarget>(createSmsAuthenticationMethodTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the includeTargets property value. A collection of groups that are enabled to use the authentication method.
     * @returns a smsAuthenticationMethodTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of groups that are enabled to use the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: SmsAuthenticationMethodTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SmsAuthenticationMethodTarget>("includeTargets", this.includeTargets);
    };
}
