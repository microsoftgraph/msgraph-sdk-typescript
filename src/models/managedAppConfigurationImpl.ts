import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePairImpl, ManagedAppPolicyImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {ManagedAppConfiguration} from './managedAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Configuration used to deliver a set of custom settings as-is to apps for users to whom the configuration is scoped */
export class ManagedAppConfigurationImpl extends ManagedAppPolicyImpl implements ManagedAppConfiguration, Parsable {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    public customSettings?: KeyValuePair[] | undefined;
    /**
     * Instantiates a new managedAppConfiguration and sets the default values.
     * @param managedAppConfigurationParameterValue 
     */
    public constructor(managedAppConfigurationParameterValue?: ManagedAppConfiguration | undefined) {
        super();
        this.customSettings = managedAppConfigurationParameterValue?.customSettings ;
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
        if(this.customSettings && this.customSettings.length != 0){        const customSettingsArrValue: KeyValuePairImpl[] = []; this.customSettings?.forEach(element => {customSettingsArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("customSettings", customSettingsArrValue);
        }
    };
}
