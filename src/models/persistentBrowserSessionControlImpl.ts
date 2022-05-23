import {ConditionalAccessSessionControlImpl} from './index';
import {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class PersistentBrowserSessionControlImpl extends ConditionalAccessSessionControlImpl implements Parsable, PersistentBrowserSessionControl {
    /** Possible values are: always, never. */
    public mode?: PersistentBrowserSessionMode | undefined;
    /**
     * Instantiates a new persistentBrowserSessionControl and sets the default values.
     * @param persistentBrowserSessionControlParameterValue 
     */
    public constructor(persistentBrowserSessionControlParameterValue?: PersistentBrowserSessionControl | undefined) {
        super();
        this.mode = persistentBrowserSessionControlParameterValue?.mode ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mode": n => { this.mode = n.getEnumValue<PersistentBrowserSessionMode>(PersistentBrowserSessionMode); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.mode){
        writer.writeEnumValue<PersistentBrowserSessionMode>("mode", this.mode);
        }
    };
}
