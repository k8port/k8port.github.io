'use server';

interface State {
    success: boolean;
    error?: string | null;
}

export async function submitContact(_prevState: State, formData: FormData): Promise<State> {
    void formData;
    return {
        success: false,
        error: 'Legacy server contact action is deprecated. Use the active contact mailto transport flow.',
    };
}
