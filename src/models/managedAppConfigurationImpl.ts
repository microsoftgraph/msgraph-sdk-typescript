import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePairImpl, ManagedAppPolicyImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {ManagedAppConfiguration} from './managedAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppConfigurationImpl extends ManagedAppPolicyImpl implements ManagedAppConfiguration {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    public customSettings?: KeyValuePair[] | undefined;
    /**
     * Instantiates a new ManagedAppConfiguration and sets the default values.
     * @param managedAppConfigurationParameterValue 
     */
    public constructor(managedAppConfigurationParameterValue?: ManagedAppConfiguration | undefined) {
        super(managedAppConfigurationParameterValue);
        const customSettingsArrValue: KeyValuePairImpl[] = []; this.customSettings?.forEach(element => {customSettingsArrValue.push(element instanceof KeyValuePairImpl? element : new KeyValuePairImpl(element));});
        this.customSettings = customSettingsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customSettings": n => { this.customSettings = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.customSettings && this.customSettings.length != 0){        const customSettingsArrValue: KeyValuePairImpl[] = []; this.customSettings?.forEach(element => {customSettingsArrValue.push(element instanceof KeyValuePairImpl? element : new KeyValuePairImpl(element));});
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("customSettings", customSettingsArrValue);
        }
    };
}
